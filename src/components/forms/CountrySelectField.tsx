import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Label } from "../ui/label"
import countryList from "react-select-country-list";

import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"
import { Button } from "../ui/button"

const CountrySelectField = ({name,label,control,error,required=false}: CountrySelectProps) => {
  return (
    
        <div className="space-y-2">

            <Label htmlFor={name} className = "form-label">

                {label}
            </Label>

            <Popover>
  <PopoverTrigger className = "border-2 border-white w-full">Open</PopoverTrigger>
  <PopoverContent className="bg-black">

    <Command className = "bg-black">
  <CommandInput placeholder="Type a command or search..." />
  <CommandList>
    <CommandEmpty>No results found.</CommandEmpty>
   
    <CommandSeparator/>
    <CommandGroup heading="Country">
      {/* <CommandItem>Profile</CommandItem>
      <CommandItem>Billing</CommandItem>
      <CommandItem>Settings</CommandItem> */}

    </CommandGroup>
  </CommandList>
</Command>
  </PopoverContent>
</Popover>
        </div>
  )
}

export default CountrySelectField