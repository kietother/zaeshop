import { useTranslation } from "react-i18next";
import { StoreState, useAppDispatch } from "../../store";
import React, { useEffect, useMemo, useState } from "react";
import { getAlbumExtraInfoAsyncThunk } from "../../store/reducers/albumDetailCollectionSlice";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import AlbumExtraInfoRequest from "../../models/album-detail-collection/AlbumExtraInfoRequest";
import { EAlbumStatus } from "../../models/enums/EAlbumStatus";
import { updateAlbumExtraInfo } from "../../services/album-detail-collection/albumDetailCollectionService";
import { toast } from "react-toastify";
import Select from "react-select";
import DropDownOption from "../../models/common/DropDownOption";

const AlbumExtraInfo: React.FC<{ id: string | undefined }> = ({ id }) => {
    const [t] = useTranslation();
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getAlbumExtraInfoAsyncThunk({ id }));
    }, [dispatch, id]);

    const { albumExtraInfo } = useSelector((state: StoreState) => state.albumDetailCollection);

    // Dropdown
    const albumStatusDropDown = useMemo((): DropDownOption<EAlbumStatus>[] => {
        return [
            {
                value: EAlbumStatus.Ongoing,
                label: t("album.ongoing")
            },
            {
                value: EAlbumStatus.Completed,
                label: t("album.completed")
            }
        ];
    }, [t]);

    const onChangeAlbumStatusSelectedOption = (selectedOption: DropDownOption<EAlbumStatus> | null) => {
        setAlbumStatusSelectedOption(selectedOption);
    }

    const [albumStatusSelectedOption, setAlbumStatusSelectedOption] = useState<DropDownOption<EAlbumStatus> | null>();

    const {
        register,
        handleSubmit,
        reset
    } = useForm<AlbumExtraInfoRequest>({
        values: useMemo((): AlbumExtraInfoRequest => {
            setAlbumStatusSelectedOption(albumStatusDropDown.find(item => item.value === albumExtraInfo?.albumStatus) ?? null);

            return {
                albumStatus: albumExtraInfo?.albumStatus ?? EAlbumStatus.Ongoing,
                alternativeName: albumExtraInfo?.alternativeName,
                type: albumExtraInfo?.type,
                releaseYear: albumExtraInfo?.releaseYear,
                authorNames: albumExtraInfo?.authorNames,
                artistNames: albumExtraInfo?.artistNames,
                tags: albumExtraInfo?.tags
            };
        }, [albumExtraInfo, albumStatusDropDown])
    });

    const onSubmit = async (albumExtraInfoRequest: AlbumExtraInfoRequest) => {
        const toastId = toast.loading(t("toast.please_wait"), {
            hideProgressBar: true
        });

        if (albumExtraInfo) {
            const response = await updateAlbumExtraInfo(id, {
                ...albumExtraInfoRequest,
                albumStatus: albumStatusSelectedOption?.value ?? EAlbumStatus.Ongoing
            });
            if (response.status === 200) {
                dispatch(getAlbumExtraInfoAsyncThunk({ id }));

                toast.update(toastId, {
                    render: t("toast.update_sucessfully"),
                    isLoading: false,
                    type: toast.TYPE.SUCCESS,
                    autoClose: 2000
                });
                return;
            }
        }

        toast.done(toastId);
    }

    const onReset = () => {
        setAlbumStatusSelectedOption(albumStatusDropDown.find(item => item.value === albumExtraInfo?.albumStatus) ?? null);

        reset({
            albumStatus: albumExtraInfo?.albumStatus ?? EAlbumStatus.Ongoing,
            alternativeName: albumExtraInfo?.alternativeName,
            type: albumExtraInfo?.type,
            releaseYear: albumExtraInfo?.releaseYear,
            authorNames: albumExtraInfo?.authorNames,
            artistNames: albumExtraInfo?.artistNames,
            tags: albumExtraInfo?.tags
        });
    }

    return (
        <div className="row">
            <div className="col-12">
                <div className="card">
                    <div className="card-header">
                        <div className="row align-items-center">
                            <div className="col">
                                <h4 className="card-title">{t('album_detail.extra_info')}</h4>
                            </div>
                            {/*end col*/}
                            <div className="col-auto">
                                <button className="btn"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseAlbumExtraInfo"
                                    aria-expanded="true"
                                    aria-controls="collapseAlbumExtraInfo">
                                    <i className="fa-solid fa-arrow-down text-secondary font-16"></i>
                                </button>
                            </div>
                            {/*end col*/}
                        </div>{" "}
                        {/*end row*/}
                    </div>
                    {/*end card-header*/}
                    <div className="card-body collapse" id="collapseAlbumExtraInfo">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="mb-3 row">
                                    <label
                                        className="col-sm-2 col-form-label text-end"
                                    >
                                        {t('album_detail.alternative_name')}
                                    </label>
                                    <div className="col-sm-10">
                                        <input
                                            className="form-control"
                                            type="text"
                                            {...register("alternativeName")}
                                        />
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    <label
                                        className="col-sm-2 col-form-label text-end"
                                    >
                                        {t('album_detail.author_names')}
                                    </label>
                                    <div className="col-sm-10">
                                        <input
                                            className="form-control"
                                            type="text"
                                            {...register("authorNames")}
                                        />
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    <label
                                        className="col-sm-2 col-form-label text-end"
                                    >
                                        {t('album_detail.artist_names')}
                                    </label>
                                    <div className="col-sm-10">
                                        <input
                                            className="form-control"
                                            type="text"
                                            {...register("artistNames")}
                                        />
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    <label
                                        className="col-sm-2 col-form-label text-end"
                                    >
                                        {t('album_detail.tags')}
                                    </label>
                                    <div className="col-sm-10">
                                        <input
                                            className="form-control"
                                            type="text"
                                            {...register("tags")}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="mb-3 row">
                                    <label
                                        className="col-sm-2 col-form-label text-end"
                                    >
                                        {t('album_detail.type')}
                                    </label>
                                    <div className="col-sm-10">
                                        <input
                                            className="form-control"
                                            type="email"
                                            {...register("type")}
                                        />
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    <label
                                        className="col-sm-2 col-form-label text-end"
                                    >
                                        {t('album_detail.album_status')}
                                    </label>
                                    <div className="col-sm-10">
                                        <Select
                                            className="basic-single"
                                            classNamePrefix="select"
                                            options={albumStatusDropDown}
                                            value={albumStatusSelectedOption}
                                            onChange={onChangeAlbumStatusSelectedOption}
                                            isSearchable={true}
                                            isClearable={true}
                                        />
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    <label
                                        className="col-sm-2 col-form-label text-end"
                                    >
                                        {t('album_detail.release_year')}
                                    </label>
                                    <div className="col-sm-10">
                                        <input
                                            className="form-control"
                                            type="text"
                                            {...register("releaseYear")}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <button
                                type="button"
                                className="btn btn-primary"
                                onClick={handleSubmit(onSubmit)}
                            >
                                {t('album_detail.button_save')}
                            </button>
                            <button
                                type="button"
                                className="btn btn-light"
                                onClick={onReset}
                            >
                                {t('album_detail.button_cancel')}
                            </button>
                        </div>
                        {/*end card-body*/}
                    </div>
                    {/*end card*/}
                </div>{" "}
                {/*end col*/}
            </div>
            {/*end row*/}
        </div>
    );
}

export default React.memo(AlbumExtraInfo);