import Table from 'react-bootstrap/Table';
import classes from './digital-arts.module.scss';
import IconsSetOne from './icons-set-one';
import IconsSetMob from './icons-set-mob';
import IconsSetTwo from './icons-set-two';

function IconsScrollSet() {
  return (
    <>
      <Table responsive>
        <tbody>
          <tr className={classes.iconsTr}>
            <td className={classes.iconsTr_Td}>
              <IconsSetOne />
            </td>
            <td className={classes.iconsTr_Td}>
              <IconsSetMob />
            </td>
            <td className={classes.iconsTr_Td}>
              <IconsSetTwo />
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}

export default IconsScrollSet;
