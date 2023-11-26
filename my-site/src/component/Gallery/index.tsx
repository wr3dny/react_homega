import { imagePaths } from "../../img";


export const Gallery = () => {
    console.log(imagePaths);

    return (
        <div className="gallery-main">
            <table>
                {imagePaths.map((path, index) => (
                    <tr key={index}>
                        <td>
                            <img src={path} alt={`Photo ${index + 1}`} />
                        </td>
                    </tr>
                ))}
            </table>
        </div>
    );
}