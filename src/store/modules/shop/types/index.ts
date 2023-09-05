export type Shop = {
    map(arg0: (card: any) => JSX.Element): import("react").ReactNode
}

export type InitialState = {
    shop: Shop | null,
    status: string,
    error: string,
    loading: boolean,
}