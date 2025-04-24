export class DialogUtils {
    static readonly overlayAnimationVariants = {
        closed: { opacity: 0 },
        open: { opacity: 1 },
    };

    static readonly contentAnimationVariants = {
        closed: { opacity: 0, scale: 0.88, y: 100 },
        open: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.26 } },
        exit: { opacity: 0, transition: { duration: 0.16 } },
    };
}
