export const viewHomepage = {
    initial: {opacity: 0},
    animate: {opacity: 1, transition: {duration: 1}},
    exit: {opacity: 0, transition: {duration: 0.5}}
};

export const viewBook = {
    initial: {opacity: 0},
    animate: {opacity: 1, transition: {duration: 2}},
};

export const returnCover = {
    initial: { opacity: 0},
    animate: { opacity: 1, transition: {duration: 1, delay: 1}}
};
