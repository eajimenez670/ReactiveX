import { debounceTime, fromEvent, map, mergeAll, Observable, pluck } from "rxjs";
import { ajax } from "rxjs/ajax";
import { GitHubUser } from "../interfaces/github-user.interfaces";
import { GitHubUsersResponse } from "../interfaces/github-users-response.interface";

// References Body
const body = document.querySelector('body');
const textInput = document.createElement('input');
const orderList = document.createElement('ol');
body.append(textInput, orderList);

// Helpers
const showUsers = (users: GitHubUser[]) => {
    orderList.innerHTML = '';
    for (const user of users) {
        let img = document.createElement('img');
        img.src = user.avatar_url;

        let anchor = document.createElement('a');
        anchor.href = user.html_url;
        anchor.target = '_blank';
        anchor.text = 'Ver página';

        let li = document.createElement('li');
        li.append(img);
        li.append(user.login + ' ');
        li.append(anchor);

        // Set Body
        orderList.append(li);
    }
}

// Streams
const input$ = fromEvent<KeyboardEvent>(textInput, 'keyup');

input$.pipe(
    debounceTime<KeyboardEvent>(600),
    map<KeyboardEvent, string>(eve => eve.target['value']),
    map<string, Observable<GitHubUsersResponse>>(text => ajax.getJSON(`https://api.github.com/search/users?q=${text}`)),
    mergeAll<Observable<GitHubUsersResponse>>(),
    map<GitHubUsersResponse, GitHubUser[]>(res => res.items)
).subscribe(showUsers);

