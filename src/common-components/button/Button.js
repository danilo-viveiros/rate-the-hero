import styled from 'style-components'

import{
    BorderRadiuses,
    Colors,
    Shadows,
    Spaces,
    FontLetterSpacings,
    FontFamilies,
    FontWeights,
    FontSizes,
} from '../../shared/DesignTokens'

export const Button = styled.Button`
    border:none;
    outline:none;
    width:100%;
    heigth:40px;
    font-family:${FontFamilies.PRIMARY};
    font-weight:${FontWeights.BOLD};
    background-colo:${Colors.BLUE_500};
    color:${Colors.NEUTRAL_WHITE};
    box-shadow:${Shadows.ONE};
    border-radius:${BorderRadiuses.ONE};
    padding:${Spaces.ONE}${Spaces.TWO};
    cursor:pointer;
    transition: 200ms all ease;
    text-transformer: uppercase;
    letter-spacing:${FontLetterSpacings.MEDIUM};
    font-size:${FontSizes.ONE_QUARTER}
    
    &amp;:hover{
        background-color:${Colors.BLUE_550}
    }
`;