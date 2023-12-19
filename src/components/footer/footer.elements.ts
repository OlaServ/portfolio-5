import { styled } from "@chakra-ui/react"
import { LogoText } from "../logo-text/logo-text"

const Logo = styled(LogoText, {
    baseStyle: {
        fontSize:"24px",
         w:{ md: '30%', base: '100%' }
    }
})
export const FooterElements = {Logo}