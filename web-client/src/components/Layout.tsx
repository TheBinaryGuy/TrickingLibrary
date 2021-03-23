import { ReactNode } from 'react';

export interface LayoutProps {
    children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
    return (
        <>
            <div style={{ height: '100%' }}>
                <div style={{ height: '100%' }}>{children}</div>
            </div>
        </>
    );
};
