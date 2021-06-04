import { MAIN_BLUE } from "../../../../constants/styleConstants";
import styles from "./AboutPanel.module.scss";

const AboutPanel = () => {
  return (
    <>
      <h1>
        What is <i style={{ color: MAIN_BLUE }}>Autodidactica?</i>
      </h1>
      <h3 className={styles.textBlock}>
        If you're learning something new, Autodidactica is here to help you
        plan, track, and share your progress. <br />
        <svg
          className={styles.icon}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64 64"
        >
          <title>Valuations</title>
          <g id="Valuations">
            <path d="M61,54H60V18a4,4,0,0,0-4-4H49V8h2a1,1,0,0,0,.71-1.71l-6-6a1,1,0,0,0-1.42,0c-6.46,6.47-6.56,6.25-6.21,7.09S39,8,41,8v6H34.41l-1.7-1.71a1,1,0,0,0-1.42,0L29.59,14H8a4,4,0,0,0-4,4V54H3a3,3,0,0,0-3,3v2a5,5,0,0,0,5,5H59a5,5,0,0,0,5-5V57A3,3,0,0,0,61,54ZM49,20h5V50H49ZM45,2.41,48.59,6H48a1,1,0,0,0-1,1V50H43V7a1,1,0,0,0-1-1h-.59ZM36,50V20h5V50Zm5-34v2H38.41l-2-2Zm-9-1.59L35.59,18H35a1,1,0,0,0-1,1V50H30V19a1,1,0,0,0-1-1h-.59ZM23,50V32h2a1,1,0,0,0,.71-1.71l-6-6a1,1,0,0,0-1.42,0c-6.46,6.47-6.56,6.25-6.21,7.09S13,32,15,32V50H10V20H28V50ZM16,30h-.59L19,26.41,22.59,30H22a1,1,0,0,0-1,1V50H17V31A1,1,0,0,0,16,30ZM6,18a2,2,0,0,1,2-2H27.59l-2,2H9a1,1,0,0,0-1,1V51a1,1,0,0,0,1,1H55a1,1,0,0,0,1-1V19a1,1,0,0,0-1-1H49V16h7a2,2,0,0,1,2,2V54H6ZM40.13,56l-.67,1H24.54l-.67-1ZM62,59a3,3,0,0,1-3,3H5a3,3,0,0,1-3-3V57a1,1,0,0,1,1-1H21.46l1.71,2.55c.42.64-.41.45,16.83.45.69,0,.74-.3,2.54-3H61a1,1,0,0,1,1,1Z" />
          </g>
        </svg>
        <br /> Create your own <i>curriculum</i> to plan and track your
        progress.
        <br />
        Then customize and share your <i>transcript</i> to show what you have
        learned. <br />
        <svg
          className={styles.icon}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64 64"
        >
          <title>Digital Agreement</title>
          <g id="Digital_Agreement" data-name="Digital Agreement">
            <path d="M61,54H60V18a4,4,0,0,0-4-4H51V9h9a1,1,0,0,0,1-1V6a6,6,0,0,0-6-6H19a6,6,0,0,0-6,6v8H8a4,4,0,0,0-4,4V54H3a3,3,0,0,0-3,3v2a5,5,0,0,0,5,5H59a5,5,0,0,0,5-5V57A3,3,0,0,0,61,54ZM51,20h3V50H51ZM59,6V7H51V6a4,4,0,0,1,8,0ZM15,6a4,4,0,0,1,4-4H50.53A6.07,6.07,0,0,0,49,6V50H15ZM10,50V20h3V50ZM6,18a2,2,0,0,1,2-2h5v2H9a1,1,0,0,0-1,1V51a1,1,0,0,0,1,1H55a1,1,0,0,0,1-1V19a1,1,0,0,0-1-1H51V16h5a2,2,0,0,1,2,2V54H6ZM40.13,56l-.67,1H24.54l-.67-1ZM62,59a3,3,0,0,1-3,3H5a3,3,0,0,1-3-3V57a1,1,0,0,1,1-1H21.46l1.71,2.55c.42.64-.45.45,16.83.45.69,0,.74-.3,2.54-3H61a1,1,0,0,1,1,1Z" />
            <path d="M22,13a4,4,0,1,0-4-4A4,4,0,0,0,22,13Zm0-6a2,2,0,1,1-2,2A2,2,0,0,1,22,7Z" />
            <path d="M29,10h8a1,1,0,0,0,0-2H29A1,1,0,0,0,29,10Z" />
            <path d="M24,19H45a1,1,0,0,0,0-2H24A1,1,0,0,0,24,19Z" />
            <path d="M19,24H45a1,1,0,0,0,0-2H19A1,1,0,0,0,19,24Z" />
            <path d="M19,29H45a1,1,0,0,0,0-2H19A1,1,0,0,0,19,29Z" />
            <path d="M19,34H39a1,1,0,0,0,0-2H19A1,1,0,0,0,19,34Z" />
            <path d="M44,44H37c-.94,0-1-2-1-2a1,1,0,0,0-1.71-.71l-1,1-.38-.76a1,1,0,0,0-1.6-.26,18.29,18.29,0,0,1-3.18,2.51A26,26,0,0,1,29,38.24a1,1,0,0,0-1.73-.89l-6,7a1,1,0,0,0,1.52,1.3l3.5-4.09c-.74,5.41,1.24,5.7,5.44,2.07.45.91.55,1.26,1.14,1.36s.77-.18,1.54-1A2.77,2.77,0,0,0,37,46h7A1,1,0,0,0,44,44Z" />
          </g>
        </svg>
        <br />
        You have the power to learn anything the way you want to. <br />
        Autodidactica will help you along the way.
        <br />
        <svg
          className={styles.icon}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64 64"
        >
          <title>Startup</title>
          <g id="Startup">
            <path d="M32,25a5,5,0,1,0-5-5A5,5,0,0,0,32,25Zm0-8a3,3,0,1,1-3,3A3,3,0,0,1,32,17Z" />
            <path d="M61,54H60V18a4,4,0,0,0-4-4H40A17.69,17.69,0,0,0,32.58.19a1,1,0,0,0-1.16,0A17.69,17.69,0,0,0,24,14H8a4,4,0,0,0-4,4V54H3a3,3,0,0,0-3,3v2a5,5,0,0,0,5,5H59a5,5,0,0,0,5-5V57A3,3,0,0,0,61,54ZM10,20H20.67C16.06,23.46,16,23.33,16,24v3a1,1,0,0,0,1,1h7.18a3,3,0,0,0,2,1.87L27,33.24A1,1,0,0,0,28,34v7.28a4.37,4.37,0,0,0-4.47.87,6,6,0,0,0-9.45,3.94,5,5,0,0,0-4,3.91C10,50,10,52.3,10,20Zm14,6H18V24.5L24,20Zm11.22,6H29c-.3,0-.15.28-.72-2h7.44ZM15,48a1,1,0,0,0,1-1,4,4,0,0,1,6.35-3.23C21,47.07,24,47,24,45.5a2.5,2.5,0,0,1,5,0,1,1,0,0,0,2,0,4.42,4.42,0,0,0-1-2.79V34h4v8.71C32.94,44,32.42,46.5,34,46.5a1,1,0,0,0,1-1,2.5,2.5,0,0,1,5,0c0,1.52,3,1.58,1.65-1.73A4,4,0,0,1,48,47a1,1,0,0,0,1,1,3,3,0,0,1,2.82,2H12.18A3,3,0,0,1,15,48Zm38.9,2a5,5,0,0,0-4-3.91,6,6,0,0,0-9.45-3.94A4.36,4.36,0,0,0,36,41.28V34a1,1,0,0,0,1-.76l.84-3.37a3,3,0,0,0,2-1.87H47a1,1,0,0,0,1-1V24c0-.67,0-.52-4.67-4H54C54,52.3,54.06,50,53.9,50ZM40,20l6,4.5V26H40ZM34.9,5.25a6,6,0,0,1-5.8,0,16.56,16.56,0,0,1,2.9-3A16.68,16.68,0,0,1,34.9,5.25ZM28,6.92a7.85,7.85,0,0,0,8,0c2.59,4.59,2,7.41,2,20.08a1,1,0,0,1-1,1H27a1,1,0,0,1-1-1C26,14.18,25.47,11.44,28,6.92ZM6,18a2,2,0,0,1,2-2H24c0,2.6,1.73,2-15,2a1,1,0,0,0-1,1V51a1,1,0,0,0,1,1H55a1,1,0,0,0,1-1V19a1,1,0,0,0-1-1c-16.67,0-15,.66-15-2H56a2,2,0,0,1,2,2V54H6ZM40.13,56l-.67,1H24.54l-.67-1ZM62,59a3,3,0,0,1-3,3H5a3,3,0,0,1-3-3V57a1,1,0,0,1,1-1H21.46l1.71,2.55c.42.64-.45.45,16.83.45.69,0,.74-.31,2.54-3H61a1,1,0,0,1,1,1Z" />
          </g>
        </svg>
      </h3>
      <br />

      <br />
    </>
  );
};

export default AboutPanel;
