export class User{
    id!: number;
    name!: string;
    email!: string;
    password!: string;
    image?: string;
    isActive!: boolean;
    createdAt!: Date;
    updatedAt!: Date;
}