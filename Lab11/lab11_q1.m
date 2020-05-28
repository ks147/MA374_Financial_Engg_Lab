clc
clf
warning('off','all')
close all
beta = [5.9,3.9,0.1];
mu = [0.2,0.1,0.4];
sigma = [0.3,0.3,0.11];
r_0 = [0.1,0.2,0.1];

% term structure T -> y(t,T)
% y(t,T) = -log(p(t,T))/(T - t) 
% where p(t,T) is zero coupon bond price for some model
fprintf('Vasicek Model\n\n','FontSize',20);
T = linspace(0,1,10);
for i=1:3
    Y = [];
    for j=1:size(T,2)
        Y(j) = vasicek(beta(i),mu(i),r_0(i),sigma(i),T(j) ,0);
    end
    figure;
    plot(T,-log(Y)./T,'o-');
    tit = sprintf('Parameter set %d',i);
    xlabel('Maturity');
    ylabel('Yield');
    title(tit,'Interpreter','tex');
end

T = linspace(0,1,500);
r_0 = 0.1:0.1:1;
for i=1:3;
    figure; hold on;
    for j=1:size(r_0,2)
        for k=1:size(T,2)
            Y(k) = vasicek(beta(i),mu(i),r_0(j),sigma(i),T(k) ,0);
        end
        plot(T,-log(Y)./T);
    end
    tit = sprintf('Parameter set %d',i);
    xlabel('Maturity');
    ylabel('Yield');
    title(tit,'Interpreter','tex');
end
    

function p = vasicek(beta,mu,r_0,sigma,T ,t)
b = beta*mu;
a = beta;
B = (1/a)*(1 - exp(-a*(T-t)));
A = (1/a^2)*(B - T +t)*(a*b - 0.5*sigma^2)...
     - (0.25/a)*(sigma*B)^2;
p = exp(A - B*r_0);
end