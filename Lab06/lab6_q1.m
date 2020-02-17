clc;
close all;
clf;
clear all;
warning('off','all');

%stock prices
stock_ticker='ITC.BO.csv';
cur_folder = 'BSE_SENSEX_INCLUDED_STOCK/';
s = readtable(strcat(cur_folder,stock_ticker));
s.AdjClose(1:3)
