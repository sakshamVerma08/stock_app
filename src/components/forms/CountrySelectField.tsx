'use client';
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
import { useMemo, useState } from "react";
import { Controller } from "react-hook-form";
import { setSourceMapsEnabled } from "process";
import { ChevronsUpDown } from "lucide-react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";


const CountrySelectField = ({name,label,control,error,required=false}: CountrySelectProps) => {

    const countries = countryList().getData();
    const [open,setOpen] = useState(false);
    
    useMemo(() => countryList().getData(), []);
   
  return (
    
        <div className="space-y-2">

            <Label htmlFor={name} className = "form-label">

                {label}
            </Label>

            <Controller
            name={name}
            control={control}
            render={({field})=>{

            return <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger className = "border-2 border-white w-full" asChild>
                    <Button
                variant="outline"
                role="combobox"
                aria-expanded={open}
                className={cn(
                  'w-full justify-between border-2 border-white',
                  !field.value && 'text-muted-foreground',
                  error && 'border-red-500'
                )}
              >

                {field.value
                  ? countries.find((country: Country) => country.value === field.value)
                      ?.label || 'Select country...'
                  : 'Select country...'}
                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
              </Button>
                
                </PopoverTrigger>

                <PopoverContent className="bg-black">

                <Command className = "bg-black">
                <CommandInput placeholder="Select country..." />
                <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
   
                <CommandSeparator/>
                <CommandGroup heading="Country">
                
                {countries.map((country: Country)=>{

                    return <CommandItem onSelect = {()=>{
                        field.onChange(country.value);
                        setOpen(false);
                    }} key = {country.value}>{country.label}</CommandItem>
                })}

                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
            }}/>

        </div>
  )
}

export default CountrySelectField