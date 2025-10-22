# Stage 1: Dependencies STage

FROM node:20-alpine AS deps 

WORKDIR /app

# Firstly , we install the pnpm package 

# corepack is a node.js utility that is used to manage 'package managers' like 'npm, pnpm, yarn' etc.
# corepack enable means that now corepack is enabled to manage package managers inside our Docker image.
# corepack prepare <package_name@package_version> is responsible to add the specifiec package manager with it's specified version
# --activate just activates that package manager.

# We do this because it's not always that "pnpm" comes pre-installed in a Node.js base image
RUN corepack enable && corepack prepare pnpm@latest --activate 

COPY package.json pnpm-lock.yaml ./


# use cache mounts for persistent cache storage across image builds. Install dependencies with cache mount as well.

RUN --mount=type=cache,target=/root/.local/share/pnpm/store \
    pnpm install --frozen-lockfile



# Stage 2: Build stage


FROM node:20-alpine AS builder 

WORKDIR /app 

# Installing pnpm package manager
RUN corepack enable && corepack prepare pnpm@latest --activate 


# Copy deps from Deps Stage (Deps artefact)
COPY --from=deps /app/node_modules ./node_modules

COPY . .

#build the app

RUN pnpm run build 



#Stage 3: Production Runtime

FROM node:20-alpine AS runner 

WORKDIR /app 

ENV NODE_ENV=production 

#Create non-root user
# We are creating a non-root user. When docker creates an image from the Dockerfile, we are running as the "root user" inside that container. 
# This can introduce types of security issues, because if our image gets compromised, then the hacker/attacker has got access to the "root".

# So we run a "non root user". The addgroup --system creates a system group inside the Linux environment of our container.
# The gid is Group ID (1001)
# adduser --system creates a new "system user" and gives it a userID of 1001 named "nextjs"
RUN addgroup --system -gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs


# Copy only required stuff from Builder stage

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

# Set correct permissions

RUN chown -R nextjs:nodejs /app

# Switching to Non Root User
USER nextjs

# Expose the default Next.js port
EXPOSE 3000

CMD ["node","server.js"]



