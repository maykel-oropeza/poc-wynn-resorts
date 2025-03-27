export interface RequestCode {
    method: SendCodeMethod;
    data: string;
}

export type ResendCodeRequest = RequestCode;

export interface CheckCodeRequest {
    code: number;
}

export type SendCodeMethod = "email" | "phone"