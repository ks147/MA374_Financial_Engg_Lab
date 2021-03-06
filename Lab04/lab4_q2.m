
clear all;
close all;
clc;
M = [0.1;0.2;0.15];
V = [0.005 -0.010 0.004;-0.010 0.040 -0.002;0.004 -0.002 0.023];

[mu1 w1 sigma1 w_min1] = eff_frontier(M,V,100);
%Minimum Variance Portfolio weights and sigma   
sd_min = sqrt(w_min1'*V*w_min1); 
mu_min = w_min1'*M;

ind_above_min = (mu1 > mu_min) ;	%	Indicates efficient horizon
ind_below_min = (mu1 < mu_min) ;	%	Indicates locus below efficient horizon
 


%	Create plot - efficient horizon is shown as a solid curve
%		-  the inefficient part of the locus is dashed
figure(1)
p1 = plot(sigma1(ind_above_min),mu1(ind_above_min),'-',sigma1(ind_below_min),mu1(ind_below_min),'--' ,sd_min,mu_min,'.') ;

hold on;
%	Change line widths, marker sizes, and colors for better appearance
set(p1(1:2),'linewidth',1) ;
set(p1(1:2),'color','blue') ;
set(p1(3),'markersize',15) ;
set(p1(3),'color','red') ;

%	Label axes
xlabel('standard deviation of return') ;
ylabel('expected return') ;
title('Efficient Frontier with no short sale');

%Stock1 and Stock 2
C1 = [0.005 -0.010;-0.010 0.040];
M1 = [0.1;0.2];
[mu2 w2 sigma2 w_min2] = eff_frontier(M1,C1,100);
sd_min2 = sqrt(w_min2'*C1*w_min2); 
mu_min2 = w_min2'*M1;
ind_above_min = (mu2 > mu_min2) ;	%	Indicates efficient horizon
ind_below_min = (mu2 < mu_min2) ;	%	Indicates locus below efficient horizon

p2 = plot(sigma2(ind_above_min),mu2(ind_above_min),'-',sigma2(ind_below_min),mu2(ind_below_min),'--');
set(p2,'linewidth',1) ;
set(p2,'color','red') ;

%Stock2 and Stock 3

C1 = [0.040 -0.002;-0.002 0.023];
M1 = [0.2;0.15];
[mu2 w2 sigma2 w_min2] = eff_frontier(M1,C1,100);
sd_min2 = sqrt(w_min2'*C1*w_min2); 
mu_min2 = w_min2'*M1;
ind_above_min = (mu2 > mu_min2) ;	%	Indicates efficient horizon
ind_below_min = (mu2 < mu_min2) ;	%	Indicates locus below efficient horizon

p2 = plot(sigma2(ind_above_min),mu2(ind_above_min),'-',sigma2(ind_below_min),mu2(ind_below_min),'--') ;
set(p2,'linewidth',1) ;
set(p2,'color','green') ;

%stock 1 and 3
%[0.005 -0.010 0.004;-0.010 0.040 -0.002;0.004 -0.002 0.023];
C1 = [0.005 0.004;0.004 0.023];
M1 = [0.1;0.15];
[mu2 w2 sigma2 w_min2] = eff_frontier(M1,C1,100);
sd_min2 = sqrt(w_min2'*C1*w_min2); 
mu_min2 = w_min2'*M1;
ind_above_min = (mu2 > mu_min2) ;	%	Indicates efficient horizon
ind_below_min = (mu2 < mu_min2) ;	%	Indicates locus below efficient horizon

p2 = plot(sigma2(ind_above_min),mu2(ind_above_min),'-',sigma2(ind_below_min),mu2(ind_below_min),'--') ;
set(p2,'linewidth',1) ;
set(p2,'color','yellow') ;

for i=1:2500
    W_no_short = normalize(rand(3,1),'norm',1);
    sigma_short(i) = sqrt(W_no_short'*V*W_no_short);
    mu_short(i) = W_no_short'*M;
end

% ind_short1 = (mu_short > min(M)) & (mu_short < max(M));
scatter(sigma_short,mu_short,'.');
legend({'3 stocks','min return','min variance','stock 1&2','min return','stock 2&3','min return',...
    'stock1&3','min return','No short sale'},'Location','northwest')

figure(2);
p1 = plot(w1(1,:),w1(2,:),'-');
set(p1,'color','red');
line([1 0],[0 1],'color','blue');
line([0 0],[0 1],'color','blue');
xlabel('W1');
ylabel('W2');
legend('W1 and W2','W1+W2=1');
%to ensure no short sale take all portfolios within return between max(M) and min(M)
function [mu w_for_mu sigma w_g] = eff_frontier(M,V,points)
Vinv = inv(V);
e = ones(length(M),1);
A = e'*Vinv*e;
B = M'*Vinv*e;
C = M'*Vinv*M;
D = A*C - B^2;

bg = (C*Vinv*e - B*Vinv*M)/D;
bh = (A*Vinv*M - B*Vinv*e)/D;
mu = linspace(min(M),max(M),points);
sigma = zeros(1,points);
w_for_mu = zeros(length(M),points);
j = 1;
for i=1:points
    w_for_mu(:,i) = bg + bh*mu(i);
    sigma(i) = sqrt(w_for_mu(:,i)'*V*w_for_mu(:,i));
end
%Minimum Variance Portfolio weights and sigma    
sd_min = 1/sqrt(A); 
mu_min = B/A;
w_g = Vinv*e/A;


end
