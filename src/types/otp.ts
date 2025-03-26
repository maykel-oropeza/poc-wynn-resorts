export interface RequestCode {
    method: SendCodeMethod;
    data: string;
}

export interface CheckCodeRequest {
    code: number;
}

export type SendCodeMethod = "email" | "phone"