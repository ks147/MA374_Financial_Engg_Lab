warning('off','all')
clear all
close all
clc
clf
rng(1)

ticker = {'ABB','AXI','BHA','HDF','IND','IOC','ITC','MAR','REL','SBI'};
ret = zeros(1233,10);
stocks = zeros(1233,10);
lg = zeros(1233,10);
% discount = exp(-0.05.*[0:1/12:5]);
% discount = discount(1:end-1);

for i=1:length(ticker)
    price_dir = strcat('bsedata1','/',ticker{i},'.csv');
    s = readtable(price_dir);
    adjusted = s.ClosePrice;
    stocks(:,i) = adjusted;
    lg(:,i) =  log(adjusted./adjusted(1));
    
    adjusted = (adjusted-adjusted(1))./adjusted(1);
    ret(:,i) = adjusted;
    
    
    m(i) = mean(adjusted);
    
end

for i=1:1 %length(ticker)
   figure;
   hold on
   plot([1:1:1233],stocks(:,i));
   plot([1:7:1233],stocks(1:7:end,i));
   plot([1:30:1233],stocks(1:30:end,i));
   title('Stock prices');
   legend('Daily','Weekly','Monthly')
   hold off
    
end    
   

for i=1:1 %length(ticker)
   mu(i) = mean(ret(:,i));
   sd(i) = std(ret(:,i));
   normalized = (ret(:,i)-mu(i))./sd(i);
   normalized = normalized;
   figure;
   hold on
   histogram(normalized,'Normalization','pdf') 
   plot([-3:0.001:3],normpdf([-3:0.001:3],0,1)) 
   title('normalized returns');
   
   hold off
    
end    

for i=1:1 %length(ticker)
    
   mu(i) = mean(lg(:,i));
   sd(i) = std(lg(:,i));
   normalized = (lg(:,i)-mu(i))./sd(i);
   figure;
   hold on
   histogram(normalized,'Normalization','pdf','NumBins',20) 
   plot([-3:0.001:3],normpdf([-3:0.001:3],0,1));
   title('normalized log returns');
       
end   

W(1)=0;
for i=2:248
    W(i)= W(i-1)+normrnd(0,1);
end

for j=1:length(ticker)
    s = std(lg(249:end,j))/19;
    m = mean(lg(249:end,j))*(1/(492));

    S(1,j)=stocks(249,j);
    for i=2:248
        S(i,j)= S(1,j)*exp(s*W(i)+(m)*i);

    end    

    figure;
    hold on
    plot(S(:,j))
    plot(stocks(248:-1:1,j))
    hold off
    title('Actual and simulated stock prices');
    legend('Actual prices','Simulated Prices');
end


