import { keyframes } from '@emotion/core';

export const slide = keyframes`
    0% {
        transform: translateX(-100%);
    }

    100% {
        transform: translateX(0);
    }
`;

export const bounce = keyframes`
    0%, 20%, 50%, 80%, 100% {
        transform: translate(-50%, 12vh);
    }

    40% {
        transform: translate(-50%, 11vh);
    }

    60% {
        transform: translate(-50%, 10vh);
    }
`;
