const friends = ['jon', 'karim', 'razia', 'Sheikh Razia Sultana', 'iqbal', 'Tanvir ahmad noyan'];
function bestFriend(friends) {
    let best_friend = friends[0];
    for (let i = 0; i < friends.length; i++) {
        let b_f_l = bestFriend.length;
        let check_b_f_l = friends[i].length;
        if (b_f_l < check_b_f_l) {
            bestFriend = friends[i];
        }
    }
    return bestFriend;
}
const output = bestFriend(friends);
console.log('Your caring friend :', output);