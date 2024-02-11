import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { StoreState, useAppDispatch } from "../../store";
import { getCollectionByIdAsyncThunkn, getContentItemsAsyncThunk } from "../../store/reducers/ContentItemSlice";
import { useSelector } from "react-redux";
import ContentItemBlankUpload from "../../components/content-item/ContentItemBlankUpload";
import ContentItemBulkUpload from "../../components/content-item/ContentItemBulkUpload";
import { useTranslation } from "react-i18next";
import classNames from "classnames";
import { toast } from "react-toastify";
import { clearCacheContentPage } from "../../services/content-item/cotentItemService";

const CotentItemPage: React.FC = () => {
    const { collectionId } = useParams();

    const dispatch = useAppDispatch();
    const [t] = useTranslation();
    const { collection, contentItems, loading } = useSelector((state: StoreState) => state.contentItem);
    const [isCloudServer, setIsCloudServer] = useState(false);

    useEffect(() => {
        if (collectionId && Number(collectionId)) {
            dispatch(getContentItemsAsyncThunk({ id: Number(collectionId) }));
            dispatch(getCollectionByIdAsyncThunkn({ id: Number(collectionId) }));
        }
    }, [dispatch, collectionId]);

    const onClearCache = async () => {
        const toastId = toast.loading(t("toast.please_wait"), {
            hideProgressBar: true
        });

        await clearCacheContentPage(collection?.albumFriendlyName ?? '', collection?.friendlyName ?? '');

        toast.update(toastId, {
            render: t("toast.update_sucessfully"),
            isLoading: false,
            type: toast.TYPE.SUCCESS,
            autoClose: 2000
        });
        return;
    }

    return (
        <>
            <div className="page-wrapper">
                {/* Page Content*/}
                <div className="page-content-tab">
                    <div className="container-fluid">
                        {/* Page-Title */}
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="page-title-box">
                                    <div className="float-end">
                                        <ol className="breadcrumb">
                                            <li className="breadcrumb-item">
                                                <a href="crm-contacts.html#">Dashboard</a>
                                            </li>
                                            {/*end nav-item*/}
                                            <li className="breadcrumb-item">
                                                <a href="crm-contacts.html#">CMS</a>
                                            </li>
                                            {/*end nav-item*/}
                                            <li className="breadcrumb-item active">Album Detail</li>
                                            <li className="breadcrumb-item active">{collection?.albumTitle}</li>
                                            <li className="breadcrumb-item active">{collection?.title}</li>
                                        </ol>
                                    </div>
                                    <h4 className="page-title">{t("album.title")}</h4>
                                </div>
                                {/*end page-title-box*/}
                            </div>
                            {/*end col*/}
                        </div>
                        {/* end page title end breadcrumb */}
                        <div className="row mb-3">
                            <div className="row">
                                <div className="button-items">
                                    <button
                                        onClick={() => setIsCloudServer(false)}
                                        className={classNames("btn", {
                                            "btn-primary": !isCloudServer,
                                            "btn-outline-primary": isCloudServer
                                        })}><i className="fa-solid fa-house"></i> {t('content_item.upload_local_server')}</button>

                                    <button
                                        onClick={() => setIsCloudServer(true)}
                                        className={classNames("btn", {
                                            "btn-primary": isCloudServer,
                                            "btn-outline-primary": !isCloudServer
                                        })}><i className="fa-solid fa-cloud"></i> {t('content_item.upload_cloud_server')}</button>
                                </div>
                                {collection && <button
                                    type="button"
                                    className="btn btn-danger float-end"
                                    onClick={onClearCache}
                                >
                                    {t('album_detail.clear_cache')}
                                </button>}
                            </div>
                        </div>
                        {!loading && contentItems?.length === 0 && <ContentItemBlankUpload id={collectionId} isCloudServer={isCloudServer} />}
                        {!loading && contentItems?.length > 0 && <ContentItemBulkUpload id={collectionId} contentItems={contentItems} isCloudServer={isCloudServer} />}
                    </div>
                </div>
            </div>
        </>
    );
}

export default CotentItemPage;