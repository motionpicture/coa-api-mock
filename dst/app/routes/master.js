"use strict";
/**
 * マスタールーター
 * @ignore
 */
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const masterRouter = express_1.Router();
masterRouter.get('/theater/:theaterCode/theater/', (__, res) => {
    res.json({
        theater_tel_num: '084-927-3550',
        theater_name: 'シネマサンシャイン１１８',
        theater_name_eng: 'CinemasunshineTest118',
        message: '',
        theater_code: '118',
        theater_name_kana: 'シネマサンシャイン１１８',
        status: 0
    });
});
masterRouter.get('/theater/:theaterCode/title/', (__, res) => {
    res.json({
        status: 0,
        message: '',
        theater_code: '118',
        list_title: [{
                kbn_eirin: '000',
                flg_mvtk_use: '0',
                show_time: 100,
                kbn_jimakufukikae: '000',
                title_name_kana: '４ＤＸ３Ｄサクヒン',
                title_name_eng: '',
                title_code: '99500',
                title_name: '４ＤＸ３Ｄ作品',
                kbn_eizou: '002',
                date_mvtk_begin: '        ',
                date_begin: '20170318',
                title_branch_num: '0',
                title_name_orig: '４ＤＸ３Ｄ作品',
                kbn_joueihousiki: '002',
                title_name_short: '４ＤＸ３Ｄ作品',
                date_end: '        '
            },
            {
                title_name_orig: '４ＤＸ３Ｄ作品（R15+）',
                date_begin: '20170318',
                title_branch_num: '0',
                date_mvtk_begin: '        ',
                kbn_joueihousiki: '002',
                date_end: '        ',
                title_name_short: '４ＤＸ３Ｄ作品（R15+）',
                title_code: '99515',
                title_name_eng: '',
                title_name: '４ＤＸ３Ｄ作品（R15+）',
                kbn_eizou: '002',
                kbn_jimakufukikae: '000',
                title_name_kana: '４ＤＸ３Ｄサクヒン（Ｒ１５＋）',
                kbn_eirin: '002',
                show_time: 100,
                flg_mvtk_use: '0'
            },
            {
                kbn_eirin: '000',
                show_time: 120,
                flg_mvtk_use: '0',
                kbn_jimakufukikae: '000',
                title_name_kana: 'ＢＥＳＴＩＡテスト',
                title_name_eng: 'BESTIA TEST',
                title_code: '99600',
                kbn_eizou: '001',
                title_name: 'ＢＥＳＴＩＡテスト',
                date_mvtk_begin: '        ',
                date_begin: '20170401',
                title_branch_num: '0',
                title_name_orig: 'ＢＥＳＴＩＡテスト',
                kbn_joueihousiki: '000',
                title_name_short: 'ＢＥＳＴＩＡテスト',
                date_end: '        '
            }]
    });
});
masterRouter.get('/theater/:theaterCode/screen/', 
// tslint:disable-next-line:max-func-body-length
(__, res) => {
    res.json({
        status: 0,
        message: '',
        theater_code: '118',
        list_screen: [
            {
                screen_name: 'シネマ１',
                screen_name_eng: 'Cinema 1',
                screen_code: '1',
                list_seat: [{
                        flg_spare: '0',
                        flg_free: '0',
                        flg_pair: '0',
                        flg_hc: '0',
                        flg_special: '0',
                        seat_num: 'Ｋ－１２',
                        seat_section: '   '
                    },
                    {
                        flg_special: '0',
                        seat_num: 'Ｋ－１３',
                        flg_hc: '0',
                        flg_pair: '0',
                        flg_free: '0',
                        flg_spare: '0',
                        seat_section: '   '
                    },
                    {
                        flg_pair: '0',
                        flg_spare: '0',
                        flg_free: '0',
                        flg_special: '0',
                        seat_num: 'Ｋ－１４',
                        flg_hc: '0',
                        seat_section: '   '
                    }]
            },
            {
                screen_code: '10',
                screen_name_eng: 'CINEMA1',
                screen_name: 'シアター１',
                list_seat: [{
                        flg_spare: '0',
                        flg_free: '0',
                        flg_pair: '0',
                        flg_hc: '0',
                        flg_special: '0',
                        seat_num: 'Ｋ－１２',
                        seat_section: '   '
                    },
                    {
                        flg_special: '0',
                        seat_num: 'Ｋ－１３',
                        flg_hc: '0',
                        flg_pair: '0',
                        flg_free: '0',
                        flg_spare: '0',
                        seat_section: '   '
                    },
                    {
                        flg_pair: '0',
                        flg_spare: '0',
                        flg_free: '0',
                        flg_special: '0',
                        seat_num: 'Ｋ－１４',
                        flg_hc: '0',
                        seat_section: '   '
                    }]
            },
            {
                screen_code: '2',
                screen_name_eng: 'Cinema 2',
                screen_name: 'シネマ２',
                list_seat: [{
                        flg_spare: '0',
                        flg_free: '0',
                        flg_pair: '0',
                        flg_hc: '0',
                        flg_special: '0',
                        seat_num: 'Ｋ－１２',
                        seat_section: '   '
                    },
                    {
                        flg_special: '0',
                        seat_num: 'Ｋ－１３',
                        flg_hc: '0',
                        flg_pair: '0',
                        flg_free: '0',
                        flg_spare: '0',
                        seat_section: '   '
                    },
                    {
                        flg_pair: '0',
                        flg_spare: '0',
                        flg_free: '0',
                        flg_special: '0',
                        seat_num: 'Ｋ－１４',
                        flg_hc: '0',
                        seat_section: '   '
                    }]
            }
        ]
    });
});
masterRouter.get('/theater/:theaterCode/schedule/', (__, res) => {
    res.json({
        status: 0,
        message: '',
        theater_code: '118',
        list_schedule: [{
                kbn_service: '000',
                time_end: '1235',
                screen_code: '50',
                title_code: '99600',
                time_begin: '1030',
                name_service_day: '',
                kbn_acoustic: '003',
                rsv_end_date: '20170411',
                date_jouei: '20170411',
                trailer_time: 5,
                flg_early_booking: '0',
                title_branch_num: '0',
                rsv_start_date: '20170409',
                available_num: 4
            },
            {
                date_jouei: '20170411',
                rsv_end_date: '20170411',
                flg_early_booking: '0',
                trailer_time: 5,
                available_num: 4,
                title_branch_num: '0',
                rsv_start_date: '20170409',
                screen_code: '50',
                kbn_service: '000',
                time_end: '1935',
                time_begin: '1730',
                title_code: '99600',
                kbn_acoustic: '003',
                name_service_day: ''
            },
            {
                title_branch_num: '0',
                rsv_start_date: '20170409',
                available_num: 4,
                rsv_end_date: '20170411',
                date_jouei: '20170411',
                trailer_time: 5,
                flg_early_booking: '0',
                title_code: '99600',
                time_begin: '2130',
                name_service_day: '',
                kbn_acoustic: '003',
                time_end: '2335',
                kbn_service: '000',
                screen_code: '50'
            }]
    });
});
masterRouter.get('/theater/:theaterCode/ticket/', (__, res) => {
    res.json({
        status: 0,
        message: '',
        list_ticket: [
            {
                ticket_name: '３Ｄメガネ',
                ticket_name_eng: '',
                ticket_code: '9000001',
                ticket_name_kana: ''
            },
            {
                ticket_name: 'IMAX３Ｄメガネ',
                ticket_name_eng: '',
                ticket_name_kana: '',
                ticket_code: '9000002'
            },
            {
                ticket_name_eng: '',
                ticket_name: 'テスト均一１６００円',
                ticket_code: '9999998',
                ticket_name_kana: 'テストキンイツ１６００エン'
            }
        ]
    });
});
masterRouter.get('/theater/:theaterCode/kubun_name/', 
// tslint:disable-next-line:max-func-body-length
(__, res) => {
    res.json({
        status: 0,
        message: '',
        list_kubun: [{
                kubun_name: 'パッケージ区分',
                kubun_add_price: 0,
                kubun_code: '001',
                kubun_name_eng: ''
            },
            {
                kubun_add_price: 0,
                kubun_name: '座席印刷区分',
                kubun_code: '002',
                kubun_name_eng: ''
            },
            {
                kubun_code: '003',
                kubun_name_eng: '',
                kubun_add_price: 0,
                kubun_name: '日計処理切替区分'
            },
            {
                kubun_name_eng: '',
                kubun_code: '004',
                kubun_name: '消費税',
                kubun_add_price: 0
            },
            {
                kubun_name: '販売区分',
                kubun_add_price: 0,
                kubun_code: '005',
                kubun_name_eng: ''
            },
            {
                kubun_add_price: 0,
                kubun_name: 'ドロワインタフェース',
                kubun_code: '006',
                kubun_name_eng: ''
            },
            {
                kubun_name_eng: '',
                kubun_code: '007',
                kubun_add_price: 0,
                kubun_name: '座席指定区分'
            },
            {
                kubun_name: 'チケット種別',
                kubun_add_price: 0,
                kubun_name_eng: '',
                kubun_code: '008'
            },
            {
                kubun_code: '009',
                kubun_name_eng: '',
                kubun_name: 'サービス区分',
                kubun_add_price: 0
            },
            {
                kubun_name_eng: '',
                kubun_code: '010',
                kubun_add_price: 0,
                kubun_name: 'チケット発券単位'
            },
            {
                kubun_name_eng: '',
                kubun_code: '011',
                kubun_add_price: 0,
                kubun_name: 'チケット制限区分'
            },
            {
                kubun_code: '012',
                kubun_name_eng: '',
                kubun_name: '割引区分',
                kubun_add_price: 0
            },
            {
                kubun_name_eng: '',
                kubun_code: '013',
                kubun_name: 'メッセージ区分',
                kubun_add_price: 0
            },
            {
                kubun_add_price: 0,
                kubun_name: 'サブシステム区分',
                kubun_code: '014',
                kubun_name_eng: ''
            },
            {
                kubun_code: '015',
                kubun_name_eng: '',
                kubun_name: '曜日',
                kubun_add_price: 0
            },
            {
                kubun_add_price: 0,
                kubun_name: '会員割引区分',
                kubun_name_eng: '',
                kubun_code: '016'
            },
            {
                kubun_name: '座席番号表示区分',
                kubun_add_price: 0,
                kubun_name_eng: '',
                kubun_code: '017'
            },
            {
                kubun_name: '座席表示色',
                kubun_add_price: 0,
                kubun_name_eng: '',
                kubun_code: '018'
            },
            {
                kubun_code: '019',
                kubun_name_eng: '',
                kubun_add_price: 0,
                kubun_name: '予約券発券区分'
            },
            {
                kubun_code: '020',
                kubun_name_eng: '',
                kubun_add_price: 0,
                kubun_name: 'チケット印刷パターン'
            },
            {
                kubun_add_price: 0,
                kubun_name: '担当者認証タイプ',
                kubun_name_eng: '',
                kubun_code: '021'
            },
            {
                kubun_code: '022',
                kubun_name_eng: '',
                kubun_name: '消費税丸め区分',
                kubun_add_price: 0
            },
            {
                kubun_name: '発券区分',
                kubun_add_price: 0,
                kubun_name_eng: '',
                kubun_code: '023'
            },
            {
                kubun_code: '024',
                kubun_name_eng: '',
                kubun_add_price: 0,
                kubun_name: '売上集計区分'
            },
            {
                kubun_add_price: 0,
                kubun_name: 'クーポン区分',
                kubun_code: '025',
                kubun_name_eng: ''
            },
            {
                kubun_add_price: 0,
                kubun_name: '使用可能権限',
                kubun_name_eng: '',
                kubun_code: '026'
            },
            {
                kubun_name: '座席位置区分縦',
                kubun_add_price: 0,
                kubun_name_eng: '',
                kubun_code: '027'
            },
            {
                kubun_name_eng: '',
                kubun_code: '028',
                kubun_name: '座席位置区分横',
                kubun_add_price: 0
            },
            {
                kubun_add_price: 0,
                kubun_name: 'ポイント加算区分',
                kubun_code: '029',
                kubun_name_eng: ''
            },
            {
                kubun_name: 'カード有効期限更新区分',
                kubun_add_price: 0,
                kubun_code: '030',
                kubun_name_eng: ''
            },
            {
                kubun_add_price: 0,
                kubun_name: '性別',
                kubun_code: '031',
                kubun_name_eng: ''
            },
            {
                kubun_code: '032',
                kubun_name_eng: '',
                kubun_add_price: 0,
                kubun_name: '税計算区分'
            },
            {
                kubun_name_eng: '',
                kubun_code: '033',
                kubun_add_price: 0,
                kubun_name: '内外税区分'
            },
            {
                kubun_add_price: 0,
                kubun_name: '商品区分',
                kubun_name_eng: '',
                kubun_code: '034'
            },
            {
                kubun_code: '035',
                kubun_name_eng: '',
                kubun_name: '単価入力区分',
                kubun_add_price: 0
            },
            {
                kubun_name_eng: '',
                kubun_code: '036',
                kubun_name: '仕入区分',
                kubun_add_price: 0
            },
            {
                kubun_name_eng: '',
                kubun_code: '037',
                kubun_add_price: 0,
                kubun_name: '支払区分'
            },
            {
                kubun_add_price: 0,
                kubun_name: '入出庫区分',
                kubun_name_eng: '',
                kubun_code: '038'
            },
            {
                kubun_code: '039',
                kubun_name_eng: '',
                kubun_add_price: 0,
                kubun_name: '天候'
            },
            {
                kubun_name: '商品種別',
                kubun_add_price: 0,
                kubun_code: '040',
                kubun_name_eng: ''
            },
            {
                kubun_name_eng: '',
                kubun_code: '041',
                kubun_add_price: 0,
                kubun_name: '伝票区分'
            },
            {
                kubun_name: '映像区分',
                kubun_add_price: 0,
                kubun_code: '042',
                kubun_name_eng: ''
            },
            {
                kubun_name: '字幕吹替',
                kubun_add_price: 0,
                kubun_name_eng: '',
                kubun_code: '043'
            },
            {
                kubun_name_eng: '',
                kubun_code: '044',
                kubun_name: '映倫区分',
                kubun_add_price: 0
            },
            {
                kubun_code: '045',
                kubun_name_eng: '',
                kubun_name: '上映方式',
                kubun_add_price: 0
            },
            {
                kubun_code: '046',
                kubun_name_eng: '',
                kubun_add_price: 0,
                kubun_name: '音響区分'
            },
            {
                kubun_add_price: 0,
                kubun_name: 'ムビチケ券種区分',
                kubun_code: '901',
                kubun_name_eng: ''
            }]
    });
});
masterRouter.get('/theater/:theaterCode/mvtk_ticketcode/', (__, res) => {
    res.json({
        status: 0,
        message: '',
        ticket_code: '',
        ticket_name: '',
        ticket_name_kana: '',
        ticket_name_eng: '',
        add_price: 100,
        add_price_glasses: 100
    });
});
exports.default = masterRouter;
