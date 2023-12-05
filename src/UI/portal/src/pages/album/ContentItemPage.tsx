import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { StoreState, useAppDispatch } from "../../store";
import { getContentItemsAsyncThunk } from "../../store/reducers/ContentItemSlice";
import { useSelector } from "react-redux";
import ContentItemBlankUpload from "../../components/content-item/ContentItemBlankUpload";

const CotentItemPage: React.FC = () => {
    const [t] = useTranslation();
    const { collectionId } = useParams();

    const dispatch = useAppDispatch();
    const { contentItems } = useSelector((state: StoreState) => state.contentItem);

    useEffect(() => {
        if (collectionId && Number(collectionId)) {
            dispatch(getContentItemsAsyncThunk({ id: Number(collectionId) }));
        }
    }, [dispatch, collectionId]);

    return (
        <>
            <ContentItemBlankUpload id={collectionId} />
        </>
    );
}

export default CotentItemPage;