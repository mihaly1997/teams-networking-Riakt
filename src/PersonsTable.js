

export const PersonsTable = () => (
    <table>

    <thead>
        <td>Nume</td>

        <td>Prenuma</td>
         
        <td>Link</td>
        <td>

        </td>
    </thead>
    <tbody>
    {props.teams.map((team, index) => (
        <tr key={index}>
          <td>{team.name.split(/\s*,\s*/).join("<br>")}</td>
          <td>{team.prenuma}</td>
          <td><a target="_blank" href={team.url}>Github</a></td>
          <td>
            <a href="#" className="delete-row" data-id="{team.id}">&#10006;</a>
            <a href="#" className="edit-row" data-id="{team.id}">&#9998;</a>
          </td>
        </tr>
      ))}
    </tbody>

    <tfoot>
        <tr>
            <td>
                <input type="text" placeholder="Enter first name" name="firstName"/>   
            </td>
            <td>
                <input type="text" placeholder="Enter last name" name="lastName"/>
            </td>
            <td>
                <input type="text" placeholder="Enter gitHub" name="gitHub"/>
            </td>
            <td>
                <button>Save</button>
            </td>
        </tr>
    </tfoot>
    
</table>

)