import { all, fork } from "redux-saga/effects";

import { themeWatcher } from "./generalSettings";

export default function* rootSaga() {
    yield all([
        themeWatcher()
    ])
}