// ***イベントハンドラ定義***

$(function() {

	// WebStorageを格納
	var session = sessionStorage;
	var local = localStorage;

	// 一覧表示
	$("#local-list").html(view(local));
	$("#session-list").html(view(session));

	// 保存
	$("#register-local-storage-btn").click(function() {
		saveItem(local);
	})
	$("#register-session-storage-btn").click(function() {
		saveItem(session);
	})

	// 削除
	$("#session-list tr").click(function() {
		deleteItem(session, $(this));
	})
	$("#local-list tr").click(function() {
		deleteItem(local, $(this));
	})

	// 全削除
	$("#refresh-storage-btn").click(function() {
		sessionStorage.clear();
		localStorage.clear();
		location.reload();
	})
})


// ***共通処理定義***

// 一覧表示の共通処理
function view(storage) {
	var result = "";
	for ( var i = 0; i < storage.length; i++) {
		storageKey = storage.key(i);
		result += ("<tr id='" + storageKey + "'><td>" + storageKey + "</td><td>" + storage.getItem(storageKey) + "</td></tr>");
	}
	return result;
}

// 保存の共通処理
function saveItem(storage) {
	if ($("#textkey").val() != "" && $("#textdata").val() != "") {
		storage.setItem($("#textkey").val(), $("#textdata").val());
		location.reload();
	}else{
		alert("空白値は登録できません");
	}
}

// 削除の共通処理
function deleteItem(storage, selectObj) {

	// 選択された行の背景色を変更
	$(selectObj).css('background-color', '#ddddff');

	// 選択されたid(該当行のキー値)を取得
	var selectKey = $(selectObj).attr("id");
	var ans = confirm("キー値[ " + selectKey + " ]を削除しますか？");

	// 削除の実行を選択した場合
	if (ans) {
		storage.removeItem(selectKey);
		alert("キー値[ " + selectKey + " ]を削除しました");
	}
	location.reload();
}