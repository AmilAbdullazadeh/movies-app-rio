export class ValidatorService {
    static min(value, min) {
        if (value.length < min) {
            return `The value must be at least ${min} characters long`;
        }
    }

    static max(value, max) {
        if (value.length > max) {
            return `The value must be at most ${max} characters long`;
        }
    }
}
