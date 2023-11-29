import { useTranslation } from "react-i18next";
import AlbumDetail from "../../components/albumDetailCollection/AlbumDetail";
import { useParams } from "react-router-dom";

const AlbumDetailCollectionPage : React.FC = () => {
    const [t] = useTranslation();
    const { albumId } = useParams();

    return (
        <>
            <AlbumDetail />
        </>
    );
}

export default AlbumDetailCollectionPage;