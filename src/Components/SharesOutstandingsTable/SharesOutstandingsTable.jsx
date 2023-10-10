import { t } from "i18next"

function SharesOutstandingsTable({ obj }) {
  return (
      <tr className="p-4">
        <td> <h5>{obj.name}</h5> </td>
        <td>
          <h4 className="d-flex"> {t('value')}:
            <p className="mx-2 "> {obj.value} </p>
          </h4>
        </td>
        <td> <h6>{obj.date}</h6></td>
      </tr>
  )
}

export default SharesOutstandingsTable