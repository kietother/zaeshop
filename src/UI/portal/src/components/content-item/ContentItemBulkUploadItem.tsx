import React from "react";
import ContentItemModel from "../../models/content-item/ContentItemModel";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { ActualFileObject } from "filepond";

type ContentItemBulkUploadItemProps = {
    contentItem: ContentItemModel;
    updateExistItem: (id: number, isPublic: boolean, orderBy: number, file?: ActualFileObject) => Promise<void>;
    deleteExistItem: (id: number) => void;
}

const ContentItemBlankUploadItem: React.FC<ContentItemBulkUploadItemProps> = ({ contentItem, updateExistItem, deleteExistItem }) => {
    return (
        <li className="list-group-item">
            <LazyLoadImage
                src={contentItem.displayUrl}
                alt={contentItem.name}
                className="rounded d-block mx-auto"
            />
            <button className="btn">
                <i className="fa-solid fa-pen text-secondary font-16"></i>
            </button>
            <button className="btn"
                onClick={() => deleteExistItem(contentItem.id)}>
                <i className="fa-solid fa-trash text-danger font-16"></i>
            </button>
        </li>
    );
};

export default React.memo(ContentItemBlankUploadItem);