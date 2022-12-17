import {getAPI} from './API'

export let isLoading = true;

function randomId() {
  const nums: number[] = [];
  while(nums.length !== 8) {
    nums.push(Math.floor(Math.random() * 100) + 1);
  }
  return nums;
}

export const GetAvatars = () => {
    const avatars: Object[] = [];

    randomId().forEach(async (id, index) => {
      await getAPI(id).then((results) => {
        const url = results.data.sprites.versions["generation-v"]["black-white"].front_default;
        avatars.push({id: index, imageUrl: url});
      });
    })
    isLoading = false;
    return avatars;
  }
