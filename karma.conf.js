// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
    config.set({
      //basePath: テストファイルやアセットを解決するための基準パス
      basePath: '',
      //frameworks: テストフレームワークを指定
      frameworks: ['jasmine', '@angular-devkit/build-angular'],
      //plugins: Karmaで使用するプラグインを指定
      plugins: [
        require('karma-jasmine'),
        require('karma-chrome-launcher'),
        require('karma-jasmine-html-reporter'),
        require('karma-coverage'),
        require('@angular-devkit/build-angular/plugins/karma')
      ],
      client: {
        jasmine: {
          // you can add configuration options for Jasmine here
          // the possible options are listed at https://jasmine.github.io/api/edge/Configuration.html
          // for example, you can disable the random execution with `random: false`
          // or set a specific seed with `seed: 4321`
        },
        //client.clearContext: falseに設定することで、テスト結果のコンテキストをブラウザに表示
        clearContext: false // leave Jasmine Spec Runner output visible in browser
      },
      //jasmineHtmlReporter.suppressAll: 重複したトレースを削除
      jasmineHtmlReporter: {
        suppressAll: true // removes the duplicated traces
      },
      //coverageReporter: コードカバレッジのレポートを生成する設定
      coverageReporter: {
        dir: require('path').join(__dirname, './coverage/ng-testing-and-debugging'),
        subdir: '.',
        reporters: [
          { type: 'html' },
          { type: 'text-summary' }
        ]
      },
      //reporters: テスト結果のレポーターを指定
      //progressは進捗を表示し、kjhtmlはブラウザにHTMLレポートを表示
      reporters: ['progress', 'kjhtml'],
      //port: Karmaが使用するポート番号
      port: 9876,
      //colors: 出力に色を付けるかどうか
      colors: true,
      //logLevel: ログのレベル
      logLevel: config.LOG_INFO,
      //autoWatch: ファイルが変更されたときに自動的にテストを再実行するかどうか
      autoWatch: true,
      //browsers: テストを実行するブラウザ。ここではChromeを使用。
      browsers: ['Chrome'],
      //singleRun: falseに設定すると、ファイルの変更を監視し、テストを再実行
      singleRun: false,
      //restartOnFileChange: ファイルの変更時にテストランナーを再起動するかどうか
      restartOnFileChange: true
    });
  };