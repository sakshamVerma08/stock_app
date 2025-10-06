import React from 'react'
import { Label } from '../ui/label'
import { Input } from '../ui/input';
import { cn } from '@/lib/utils';

const InputField = ({name,label,placeholder,type = "text", register, error,validation,disabled,value}: FormInputProps) => {

  return (
    <div className='space-y-2'>

        <Label htmlFor={name} className='form-label'>

                {label}
        </Label>

        <Input placeholder={placeholder} type = {type} id = {name} disabled={disabled} value = {value} className={cn()} />
    </div>
  )
}

export default InputField;