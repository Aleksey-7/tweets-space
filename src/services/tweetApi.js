import axios from 'axios';

const user = axios.create({
  baseURL: 'https://64419450fadc69b8e08786fb.mockapi.io/api/v1/',
});

export async function getFilteredTweets(filter, page = 1) {
  try {
    const response = await user.get(
      `users?page=${page}&limit=3&filter=${filter}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function updateTweet(id, followers, following) {
  try {
    const response = await user.put(`users/${id}`, {
      followers: followers,
      following: following,
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
