declare module "react-select-country-list"{

    interface CountryOption{

        label: string,
        value: string,
    }


    interface CountryList{

        getData: ()=>CountryOption[],
        getValue: (label: string)=>string | undefined,
        getLabel: (value: string)=>string | undefined
    }


    export default function countryList(): CountryList
}


