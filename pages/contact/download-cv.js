import { saveAs } from 'file-saver';
import classes from './contact.module.scss';
import { FaDownload } from 'react-icons/fa';

export default function DownloadCv() {
  const saveFile = () => {
    saveAs('/download/CV_Afolabi_Lipede.pdf', 'CV_Afolabi_Lipede.pdf');
  };
  return (
    <div>
      <button className={classes.cvbtn} onClick={saveFile}>
        <span className={classes.icons}>
          <FaDownload />
        </span>{' '}
        Download CV <em>(pdf)</em>
      </button>
    </div>
  );
}
