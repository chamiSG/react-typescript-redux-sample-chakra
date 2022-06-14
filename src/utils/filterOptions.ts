interface ISelectOption {
  value?: string | number | readonly string[] | undefined,
  label?: string | number | readonly string[] | undefined
}

export const StatusOptions: ISelectOption[] = [
  { value: "unknown", label: 'Unknown' },
  { value: "alive", label: 'Alive' },
  { value: "dead", label: 'Dead' }
]

export const GenderOptions: ISelectOption[] = [
  { value: "unknown", label: 'Unknown' },
  { value: "male", label: 'Male' },
  { value: "female", label: 'Female' },
]
