import { ReactElement, createContext, useState } from "react";

type PageContextData = {
    isRegisterPage: boolean;
    switchPages: () => void;
}

const PageContext = createContext<PageContextData>({
    isRegisterPage: false,
    switchPages: () => {}
} as PageContextData);

type PageContextProviderProps = {
    children: ReactElement;
}

const PageContextProvider = ({ children }: PageContextProviderProps) => {
    const [isRegisterPage, setIsRegisterPage] = useState(false)

    const switchPages = () => {
        setIsRegisterPage(!isRegisterPage)
    }

    const value = {
        isRegisterPage,
        switchPages
    }

    return (
        <PageContext.Provider value={value}>
            {children}
        </PageContext.Provider>
    )

}

export {
    PageContext,
    PageContextProvider
}
