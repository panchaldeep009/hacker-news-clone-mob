import React from "react";
import { BasicProviders } from ".";

const CosomosDecorator: React.FC = ({ children }) => <BasicProviders>{children}</BasicProviders>;

export default CosomosDecorator;