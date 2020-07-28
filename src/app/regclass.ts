export class registration{
    constructor(
        public name: string,
        public email: string,
        public mobile: number,
        public password: string,
        public cpassword?: string
        ){ }
}