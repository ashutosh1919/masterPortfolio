import {Provider as StyletronProvider} from "styletron-react";
import {BaseProvider, LightTheme} from "baseui";
import {ThemeProvider} from "styled-components";
import {chosenTheme} from "../../theme";
import {GlobalStyles} from "../../global";
import Main from "../../containers/Main";
import React from "react";
import {styletron} from "../../styletron";


export default function ReactApp() {
    return <StyletronProvider value={styletron}>
        <BaseProvider theme={LightTheme}>
            <ThemeProvider theme={chosenTheme}>
                <>
                    <GlobalStyles />
                    <div>
                        <Main theme={chosenTheme} />
                    </div>
                </>
            </ThemeProvider>
        </BaseProvider>
    </StyletronProvider>;
}