import {
    FetchSuccessPayload,
    FetchSuccessPayloadData,
    FetchSuccessPayloadUsers,
    Data,
    SpacesData,
    UserData
} from './type';

const mapToUserData = ({
    id,
    name,
    username,
    profile_image_url
}: FetchSuccessPayloadUsers): UserData => {
    const data = {
        userId: id,
        name,
        userName: username,
        profileImage: profile_image_url
    };

    return data;
};

const mapToSpaceData = ({
    state,
    lang,
    id,
    title,
    creator_id,
    scheduled_start,
    host_ids,
    speaker_ids
}: FetchSuccessPayloadData): SpacesData => {
    const data = {
        state,
        lang,
        id,
        title,
        creatorId: creator_id,
        scheduledStart: scheduled_start,
        hostIds: host_ids,
        speakerIds: speaker_ids
    };

    return data;
};

const mapToData = ({ data, includes }: FetchSuccessPayload): Data => {
    const newData = {
        data: data.map(item => mapToSpaceData(item)),
        includes: includes.users.map(item => mapToUserData(item))
    };

    return newData;
};

export { mapToUserData, mapToSpaceData, mapToData };
