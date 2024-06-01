import {ValidatorService} from "../../services/validator.ts";

const VALIDATION_RULES: {
    [key: string]: (value: string) => string | undefined
} = {
    title: (value: string) => {
        return ValidatorService.min(value, 3) || ValidatorService.max(value, 10);
    },
    content: (value: string) => {
        return ValidatorService.min(value, 10) || ValidatorService.max(value, 100);
    }
}

export const hasError = (formErrors: {
    [key: string]: string;
}): boolean => {
    return Object.values(formErrors).some((error) => error !== "");
}

export const validate = (fieldName: string, fieldValue: string, setFormErrors: any, formErrors: {
    [key: string]: string;
}): void => {
    // VALIDATION_RULES['content']('1');
    const error = VALIDATION_RULES[fieldName](fieldValue);
    setFormErrors({
        ...formErrors,
        [fieldName]: error,
    });

}