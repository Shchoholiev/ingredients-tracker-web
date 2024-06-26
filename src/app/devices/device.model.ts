export class Device {
    public id: string = '';
    public name?: string = '';
    public type: DeviceType = DeviceType.Unknown;
    public guid: string = '';
    public groupId?: string = '';
    public isActive: boolean = false;

    public isEditing: boolean = false;
}

export enum DeviceType {
    Unknown, // To enforce API users to set type explicitly
    ProductsRecognizer
}
