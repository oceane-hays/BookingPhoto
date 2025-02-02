import React from "react";

export interface ButtonProps {
    color?: string;
    name?: string;
    children: React.ReactNode;
    onClick?: () => void;
}

export interface ContainerProps {
    title: string;
    children: React.ReactNode;
}

export interface LineContainerProps {
    children: React.ReactNode;
}

export interface PortfolioCardProps {
    title?: string;
    image?: string;
    onClick?: () => void;
}

export interface NavBarProps {
    handleNav?: () => void;
    scrolled?: boolean;
}