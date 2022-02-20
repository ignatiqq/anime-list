import { takeLatest, select, put } from "redux-saga/effects";

function* changeTheme() {
    const theme: string = yield select((state) => state.generalSettings.theme)

    yield put({type: "SET_THEME", payload: theme === "dark" ? "light" : "dark"})
}

export function* themeWatcher() {
    yield takeLatest("SET_THEME", changeTheme);
}
