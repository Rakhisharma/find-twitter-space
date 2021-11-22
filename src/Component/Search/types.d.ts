import { FieldProps } from '@app/pages/Vendors/Table/Search/types';

export interface FilterOptionsProps extends FieldProps {
    name: string;
    render: (props: FieldProps) => ReactElement;
}
