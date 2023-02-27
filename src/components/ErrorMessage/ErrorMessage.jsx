import video from "../ui/uiVideo/video/video.mp4";
import UiVideo from "../ui/uiVideo";


import styles from "./ErrorMessage.module.css";


const ErrorMessage = () => {
    return (
        <>
        <p className={styles.text}>
            The dark side of the force has won.<br />
            We cannot display data.<br />
            Come back when we fix everything
        </p>
        <UiVideo src={ video } playbackRate={ 1.5 } classes={ styles.video } />
    </>
    )
}

export default ErrorMessage;

