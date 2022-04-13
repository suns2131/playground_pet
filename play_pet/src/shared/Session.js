
export const Create_Session_key = (id, nickname, is_login) => {
    const sesstion_key = id + nickname;
    return sesstion_key;
}