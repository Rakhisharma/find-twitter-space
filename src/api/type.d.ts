export interface FetchSuccessPayload {
    data: Array<FetchSuccessPayloadData>;
    includes: FetchSuccessPayloadIncludes;
}

export interface FetchSuccessPayloadIncludes {
    users: Array<FetchSuccessPayloadUsers>;
}
export interface FetchSuccessPayloadData {
    state: string;
    lang: string;
    id: string;
    title: string;
    creator_id: string;
    scheduled_start: string;
    host_ids: Array<string>;
    speaker_ids: Array<string>;
}

export interface FetchSuccessPayloadUsers {
    id: string;
    name: string;
    username: string;
    profile_image_url: string;
}

export interface SpacesData {
    state: FetchSuccessPayloadData['state'];
    lang: FetchSuccessPayloadData['lang'];
    id: FetchSuccessPayloadData['id'];
    title: FetchSuccessPayloadData['title'];
    creatorId: FetchSuccessPayloadData['creator_id'];
    scheduledStart: FetchSuccessPayloadData['scheduled_start'];
    hostIds: FetchSuccessPayloadData['host_ids'];
    speakerIds: FetchSuccessPayloadData['speaker_ids'];
}

export interface UserData {
    userId: FetchSuccessPayloadUsers['id'];
    userName: FetchSuccessPayloadUsers['username'];
    name: FetchSuccessPayloadUsers['name'];
    profileImage: FetchSuccessPayloadUsers['profile_image_url'];
}

export interface Data {
    data: Array<SpacesData>;
    includes: Array<UserData>;
}
