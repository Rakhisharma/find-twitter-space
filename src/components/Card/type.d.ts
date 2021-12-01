import {
    FetchSuccessPayloadUsers,
    FetchSuccessPayloadData
} from '../../api/type';

export interface Data {
    userId: FetchSuccessPayloadUsers['id'];
    userName: FetchSuccessPayloadUsers['username'];
    name: FetchSuccessPayloadUsers['name'];
    profileImage: FetchSuccessPayloadUsers['profile_image_url'];
    state: FetchSuccessPayloadData['state'];
    lang: FetchSuccessPayloadData['lang'];
    id: FetchSuccessPayloadData['id'];
    title: FetchSuccessPayloadData['title'];
    creatorId: FetchSuccessPayloadData['creator_id'];
    scheduledStart: FetchSuccessPayloadData['scheduled_start'];
    hostIds: FetchSuccessPayloadData['host_ids'];
    speakerIds: FetchSuccessPayloadData['speaker_ids'];
}
