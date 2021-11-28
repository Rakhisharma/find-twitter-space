export interface FetchSuccessPayload {
    meta: FetchSuccessPayloadMeta;
    includes: FetchSuccessPayloadIncludes;
    data: Array<FetchSuccessPayloadData>;
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

export interface FetchSuccessPayloadIncludes {
    users: Array<FetchSuccessPayloadUsers>;
}

export interface FetchSuccessPayloadUsers {
    id: string;
    name: string;
    username: string;
    profile_image_url: string;
}

export interface FetchSuccessPayloadMeta {
    result_count: number;
}

export interface Data {
    userId: FetchSuccessPayloadUsers['id'];
    userName: FetchSuccessPayloadUsers['username'];
    name: FetchSuccessPayloadUsers['name'];
    profileImage: FetchSuccessPayloadUsers['profile_image_url'];
    spaceId: FetchSuccessPayloadData['id'];
    spaceTitle: FetchSuccessPayloadData['title'];
    spaceState: FetchSuccessPayloadData['state'];
    spaceScheduleStart: FetchSuccessPayloadData['scheduled_start'];
    spaceLanguage: FetchSuccessPayloadData['lang'];
    spaceSpeakers: FetchSuccessPayloadData['speaker_ids'];
    spaceHostId: FetchSuccessPayloadUsers['id'];
    spaceCount: FetchSuccessPayloadMeta['result_count'];
}
